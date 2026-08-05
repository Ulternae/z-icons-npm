import React from 'react';

export interface LanTableSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableSlash(props: LanTableSlashProps): React.ReactElement;
export default LanTableSlash;
