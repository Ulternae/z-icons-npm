import React from 'react';

export interface LanPencilSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilSlash(props: LanPencilSlashProps): React.ReactElement;
export default LanPencilSlash;
