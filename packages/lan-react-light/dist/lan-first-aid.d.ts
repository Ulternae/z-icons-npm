import React from 'react';

export interface LanFirstAidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFirstAid(props: LanFirstAidProps): React.ReactElement;
export default LanFirstAid;
