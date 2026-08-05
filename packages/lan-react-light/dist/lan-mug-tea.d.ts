import React from 'react';

export interface LanMugTeaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugTea(props: LanMugTeaProps): React.ReactElement;
export default LanMugTea;
