import React from 'react';

export interface LanListCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListCheckRegular(props: LanListCheckRegularProps): React.ReactElement;
export default LanListCheckRegular;
