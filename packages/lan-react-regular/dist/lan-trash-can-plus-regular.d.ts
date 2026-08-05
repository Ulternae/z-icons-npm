import React from 'react';

export interface LanTrashCanPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanPlusRegular(props: LanTrashCanPlusRegularProps): React.ReactElement;
export default LanTrashCanPlusRegular;
