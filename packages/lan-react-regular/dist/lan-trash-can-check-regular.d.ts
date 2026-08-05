import React from 'react';

export interface LanTrashCanCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanCheckRegular(props: LanTrashCanCheckRegularProps): React.ReactElement;
export default LanTrashCanCheckRegular;
