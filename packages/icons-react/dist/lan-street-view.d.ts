import React from 'react';

export interface LanStreetViewProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStreetView: React.FC<LanStreetViewProps>;
export default LanStreetView;
