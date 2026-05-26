import React from 'react';

export interface LanMapMarkerExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerExclamation: React.FC<LanMapMarkerExclamationProps>;
export default LanMapMarkerExclamation;
