import React from 'react';

export interface MinaBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookOpen(props: MinaBookOpenProps): React.ReactElement;
export default MinaBookOpen;
