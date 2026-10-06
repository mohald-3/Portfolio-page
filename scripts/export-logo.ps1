Add-Type -AssemblyName System.Drawing

$size = 1024
$scale = $size / 100
$outputPath = Join-Path $PSScriptRoot '..\public\logo.png'

$bitmap = [System.Drawing.Bitmap]::new($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.Clear([System.Drawing.Color]::Transparent)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$gradient = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.RectangleF]::new(0, 0, $size, $size),
    [System.Drawing.ColorTranslator]::FromHtml('#8b5cf6'),
    [System.Drawing.ColorTranslator]::FromHtml('#6d28d9'),
    45
)

function New-LogoPen([float]$width) {
    $pen = [System.Drawing.Pen]::new($gradient, $width * $scale)
    $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    return $pen
}

function Convert-Points([float[][]]$points) {
    return [System.Drawing.PointF[]]($points | ForEach-Object {
        [System.Drawing.PointF]::new($_[0] * $scale, $_[1] * $scale)
    })
}

$borderPen = New-LogoPen 6
$markPen = New-LogoPen 8

$graphics.DrawPolygon($borderPen, (Convert-Points @(
    @(50, 5), @(90, 25), @(90, 75), @(50, 95), @(10, 75), @(10, 25)
)))
$graphics.DrawLines($markPen, (Convert-Points @(
    @(25, 70), @(25, 35), @(50, 55), @(75, 35), @(75, 70)
)))

$bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$borderPen.Dispose()
$markPen.Dispose()
$gradient.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Exported $outputPath"
