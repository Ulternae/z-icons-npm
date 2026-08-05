import React from 'react';

export interface LanPersonFairyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFairyRegular(props: LanPersonFairyRegularProps): React.ReactElement;
export default LanPersonFairyRegular;
