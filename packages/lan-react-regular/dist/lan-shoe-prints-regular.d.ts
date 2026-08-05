import React from 'react';

export interface LanShoePrintsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoePrintsRegular(props: LanShoePrintsRegularProps): React.ReactElement;
export default LanShoePrintsRegular;
