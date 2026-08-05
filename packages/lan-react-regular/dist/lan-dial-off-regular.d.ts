import React from 'react';

export interface LanDialOffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialOffRegular(props: LanDialOffRegularProps): React.ReactElement;
export default LanDialOffRegular;
