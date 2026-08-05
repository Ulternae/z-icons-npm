import React from 'react';

export interface LanPostageStampRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPostageStampRegular(props: LanPostageStampRegularProps): React.ReactElement;
export default LanPostageStampRegular;
