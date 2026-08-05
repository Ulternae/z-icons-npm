import React from 'react';

export interface LanToiletPaperSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperSlash(props: LanToiletPaperSlashProps): React.ReactElement;
export default LanToiletPaperSlash;
