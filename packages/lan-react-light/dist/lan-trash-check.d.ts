import React from 'react';

export interface LanTrashCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCheck(props: LanTrashCheckProps): React.ReactElement;
export default LanTrashCheck;
