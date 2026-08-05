import React from 'react';

export interface LanTrashCanListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanListRegular(props: LanTrashCanListRegularProps): React.ReactElement;
export default LanTrashCanListRegular;
