import React from 'react';

export interface LanTrashCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCheckRegular(props: LanTrashCheckRegularProps): React.ReactElement;
export default LanTrashCheckRegular;
