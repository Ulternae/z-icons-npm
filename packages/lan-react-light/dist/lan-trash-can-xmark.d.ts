import React from 'react';

export interface LanTrashCanXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanXmark(props: LanTrashCanXmarkProps): React.ReactElement;
export default LanTrashCanXmark;
