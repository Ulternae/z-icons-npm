import React from 'react';

export interface LanMapMarkerExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerExclamation(props: LanMapMarkerExclamationProps): React.ReactElement;
export default LanMapMarkerExclamation;
