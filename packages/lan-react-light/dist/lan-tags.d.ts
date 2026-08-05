import React from 'react';

export interface LanTagsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTags(props: LanTagsProps): React.ReactElement;
export default LanTags;
