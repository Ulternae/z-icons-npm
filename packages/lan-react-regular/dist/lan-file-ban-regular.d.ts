import React from 'react';

export interface LanFileBanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBanRegular(props: LanFileBanRegularProps): React.ReactElement;
export default LanFileBanRegular;
