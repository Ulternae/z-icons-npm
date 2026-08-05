import React from 'react';

export interface LanKeynoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeynoteRegular(props: LanKeynoteRegularProps): React.ReactElement;
export default LanKeynoteRegular;
