import React from 'react';

export interface LanBoothCurtainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoothCurtain(props: LanBoothCurtainProps): React.ReactElement;
export default LanBoothCurtain;
