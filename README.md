# FPGA Implementation of Edge Detection and Data Transfer using XSCT
FPGA Implementation of Edge Detection and Data Transfer using XSCT

Image processing plays a crucial role in a wide range of modern applications, from
autonomous systems and robotics to medical imaging and video surveillance. This
report explores the implementation of edge detection, one of the fundamental techniques
in image processing, which is used to identify object boundaries and features
within images. By leveraging a Zynq-based platform, the project demonstrates how
hardware and software can work together to achieve efficient image processing.
The system architecture integrates a Processing System (PS) for managing operations
and a Programmable Logic (PL) for executing Image Processing IP. Data is
exchanged between the DDR memory and the image processing modules using a Direct
Memory Access (DMA) controller, ensuring seamless and fast communication.
Edge detection is implemented through hardware convolution, which processes a 3x3
pixel window to highlight changes in intensity and detect edges efficiently.
The Data Transfer between a DDR and PC can be enhanced using XSCT of which
basic implemnetation is shown in this Report.
This Report demonstrates not only the successful implementation of edge detection
but also the practical integration of programmable hardware and software tools.

The approach highlights the potential of FPGA-based systems for scalable and
high-performance image processing, paving the way for applications in real-time
environments. This report details the system’s development process, from architecture
design and module configuration to results validation, offering a comprehensive
overview of the work done.
