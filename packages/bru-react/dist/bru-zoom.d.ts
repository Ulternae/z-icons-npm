import React from 'react';

export interface BruZoomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruZoom(props: BruZoomProps): React.ReactElement;
export default BruZoom;
