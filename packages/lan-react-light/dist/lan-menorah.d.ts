import React from 'react';

export interface LanMenorahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMenorah(props: LanMenorahProps): React.ReactElement;
export default LanMenorah;
