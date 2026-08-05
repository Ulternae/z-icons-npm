import React from 'react';

export interface LanClarinetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClarinetRegular(props: LanClarinetRegularProps): React.ReactElement;
export default LanClarinetRegular;
