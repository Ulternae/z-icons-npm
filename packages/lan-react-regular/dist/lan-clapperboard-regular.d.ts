import React from 'react';

export interface LanClapperboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClapperboardRegular(props: LanClapperboardRegularProps): React.ReactElement;
export default LanClapperboardRegular;
