import React from 'react';

export interface LanBacteriaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacteriaThin(props: LanBacteriaThinProps): React.ReactElement;
export default LanBacteriaThin;
