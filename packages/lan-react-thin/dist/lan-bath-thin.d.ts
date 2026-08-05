import React from 'react';

export interface LanBathThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBathThin(props: LanBathThinProps): React.ReactElement;
export default LanBathThin;
