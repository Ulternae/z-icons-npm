import React from 'react';

export interface LanTrashSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashSlash(props: LanTrashSlashProps): React.ReactElement;
export default LanTrashSlash;
