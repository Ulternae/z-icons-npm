import React from 'react';

export interface LanMapSignsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapSigns(props: LanMapSignsProps): React.ReactElement;
export default LanMapSigns;
