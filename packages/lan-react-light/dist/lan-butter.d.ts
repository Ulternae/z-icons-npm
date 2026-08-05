import React from 'react';

export interface LanButterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButter(props: LanButterProps): React.ReactElement;
export default LanButter;
