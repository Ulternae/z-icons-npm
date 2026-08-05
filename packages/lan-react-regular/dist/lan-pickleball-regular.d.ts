import React from 'react';

export interface LanPickleballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickleballRegular(props: LanPickleballRegularProps): React.ReactElement;
export default LanPickleballRegular;
