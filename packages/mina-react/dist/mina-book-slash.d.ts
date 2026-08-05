import React from 'react';

export interface MinaBookSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookSlash(props: MinaBookSlashProps): React.ReactElement;
export default MinaBookSlash;
