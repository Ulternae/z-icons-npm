import React from 'react';

export interface LanTrashXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashXmark(props: LanTrashXmarkProps): React.ReactElement;
export default LanTrashXmark;
