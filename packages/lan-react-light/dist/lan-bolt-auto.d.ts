import React from 'react';

export interface LanBoltAutoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltAuto(props: LanBoltAutoProps): React.ReactElement;
export default LanBoltAuto;
