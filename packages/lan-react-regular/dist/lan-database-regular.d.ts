import React from 'react';

export interface LanDatabaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDatabaseRegular(props: LanDatabaseRegularProps): React.ReactElement;
export default LanDatabaseRegular;
