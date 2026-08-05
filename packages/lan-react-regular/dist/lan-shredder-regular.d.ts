import React from 'react';

export interface LanShredderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShredderRegular(props: LanShredderRegularProps): React.ReactElement;
export default LanShredderRegular;
