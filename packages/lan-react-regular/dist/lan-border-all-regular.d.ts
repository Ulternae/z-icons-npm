import React from 'react';

export interface LanBorderAllRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderAllRegular(props: LanBorderAllRegularProps): React.ReactElement;
export default LanBorderAllRegular;
