import React from 'react';

export interface LanFileAwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAwardRegular(props: LanFileAwardRegularProps): React.ReactElement;
export default LanFileAwardRegular;
