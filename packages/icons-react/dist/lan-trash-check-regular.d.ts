import React from 'react';

export interface LanTrashCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCheckRegular: React.FC<LanTrashCheckRegularProps>;
export default LanTrashCheckRegular;
