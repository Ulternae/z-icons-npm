import React from 'react';

export interface LanFileVideoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVideoRegular(props: LanFileVideoRegularProps): React.ReactElement;
export default LanFileVideoRegular;
