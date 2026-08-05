import React from 'react';

export interface LanTextHeightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextHeightRegular(props: LanTextHeightRegularProps): React.ReactElement;
export default LanTextHeightRegular;
