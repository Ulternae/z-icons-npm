import React from 'react';

export interface LanMessageDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageDotRegular(props: LanMessageDotRegularProps): React.ReactElement;
export default LanMessageDotRegular;
