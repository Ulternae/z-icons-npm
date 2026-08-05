import React from 'react';

export interface LanFolderMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderMinusThin(props: LanFolderMinusThinProps): React.ReactElement;
export default LanFolderMinusThin;
