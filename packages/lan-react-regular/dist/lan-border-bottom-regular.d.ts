import React from 'react';

export interface LanBorderBottomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderBottomRegular(props: LanBorderBottomRegularProps): React.ReactElement;
export default LanBorderBottomRegular;
