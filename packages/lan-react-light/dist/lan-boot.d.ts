import React from 'react';

export interface LanBootProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoot(props: LanBootProps): React.ReactElement;
export default LanBoot;
