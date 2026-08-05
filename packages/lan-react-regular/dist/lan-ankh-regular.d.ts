import React from 'react';

export interface LanAnkhRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnkhRegular(props: LanAnkhRegularProps): React.ReactElement;
export default LanAnkhRegular;
