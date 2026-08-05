import React from 'react';

export interface LanMonumentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonumentRegular(props: LanMonumentRegularProps): React.ReactElement;
export default LanMonumentRegular;
