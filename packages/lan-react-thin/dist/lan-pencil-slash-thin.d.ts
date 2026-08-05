import React from 'react';

export interface LanPencilSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilSlashThin(props: LanPencilSlashThinProps): React.ReactElement;
export default LanPencilSlashThin;
