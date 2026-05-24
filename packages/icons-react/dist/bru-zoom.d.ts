import React from 'react';

export interface BruZoomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruZoom: React.FC<BruZoomProps>;
export default BruZoom;
