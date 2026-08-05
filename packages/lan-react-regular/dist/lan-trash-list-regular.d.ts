import React from 'react';

export interface LanTrashListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashListRegular(props: LanTrashListRegularProps): React.ReactElement;
export default LanTrashListRegular;
